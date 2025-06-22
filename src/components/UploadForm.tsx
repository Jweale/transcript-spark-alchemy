
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FileUploadArea from './FileUploadArea';
import TextPasteArea from './TextPasteArea';
import UrlInputField from './UrlInputField';
import { Button } from '@/components/ui/button';
import ErrorMessage from './ErrorMessage';

const UploadForm = () => {
  const [activeTab, setActiveTab] = useState('file');
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [pastedText, setPastedText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = (file: File | null) => {
    setUploadedFile(file);
    setError(null);
  };

  const handleTextPaste = (text: string) => {
    setPastedText(text);
    setError(null);
  };

  const handleProcessTranscript = async () => {
    // Validation
    if (activeTab === 'file' && !uploadedFile) {
      setError('Please upload a transcript file to continue.');
      return;
    }
    
    if (activeTab === 'text' && !pastedText.trim()) {
      setError('Please paste your transcript text to continue.');
      return;
    }

    if (!canonicalUrl.trim()) {
      setError('Please provide the original episode URL for proper attribution.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      console.log('Processing transcript...', { activeTab, uploadedFile, pastedText, canonicalUrl });
      // Here you would typically send the data to your API
    }, 2000);
  };

  const canProcess = (activeTab === 'file' && uploadedFile) || 
                    (activeTab === 'text' && pastedText.trim()) && 
                    canonicalUrl.trim();

  return (
    <Card className="shadow-lg border-0">
      <CardContent className="p-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger 
              value="file" 
              className="data-[state=active]:bg-white data-[state=active]:text-brand-primary data-[state=active]:shadow-sm font-medium"
            >
              📄 Upload File
            </TabsTrigger>
            <TabsTrigger 
              value="text" 
              className="data-[state=active]:bg-white data-[state=active]:text-brand-primary data-[state=active]:shadow-sm font-medium"
            >
              📝 Paste Text
            </TabsTrigger>
          </TabsList>

          <TabsContent value="file" className="space-y-6">
            <FileUploadArea onFileUpload={handleFileUpload} error={error} />
          </TabsContent>

          <TabsContent value="text" className="space-y-6">
            <TextPasteArea onTextChange={handleTextPaste} error={error} />
          </TabsContent>

          <div className="space-y-6 pt-4 border-t border-gray-200">
            <UrlInputField 
              value={canonicalUrl} 
              onChange={setCanonicalUrl}
              error={error}
            />

            {error && <ErrorMessage message={error} />}

            <div className="flex justify-center">
              <Button 
                onClick={handleProcessTranscript}
                disabled={!canProcess || isProcessing}
                className="px-12 py-3 text-lg font-semibold bg-brand-primary hover:bg-brand-primary/90 text-white"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Processing...
                  </>
                ) : (
                  'Process Transcript'
                )}
              </Button>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UploadForm;
