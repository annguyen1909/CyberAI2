'use client'
import React, { useState } from 'react';

const CodeScan: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [githubLink, setGithubLink] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleGithubLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGithubLink(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setResults(null);

    // Simulate an API call
    setTimeout(() => {
      setResults('Code scan completed successfully.');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Code Scan</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Code File
          </label>
          <input
            type="file"
            accept=".js,.ts,.jsx,.tsx,.py,.java,.cpp,.c"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="text-center text-gray-500 mb-4">or</div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            GitHub Repository Link
          </label>
          <input
            type="text"
            placeholder="https://github.com/username/repository"
            value={githubLink}
            onChange={handleGithubLinkChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors"
          disabled={loading || (!file && !githubLink)}
        >
          {loading ? 'Scanning...' : 'Start Scan'}
        </button>
      </form>

      {results && (
        <div className="mt-8 text-center bg-green-100 text-green-700 py-4 px-6 rounded-lg">
          {results}
        </div>
      )}
    </div>
  );
};

export default CodeScan;
