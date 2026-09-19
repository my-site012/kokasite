
import React, { useState, useEffect } from "react";

interface ElementorData {
  content: string;
  css: string;
}

// WordPress backend is not connected.
// These hooks return null/empty immediately — no API calls are made.
export const useElementorTemplate = (_templateId: string | number) => {
  return { data: null, loading: false };
};

export const useThemeSettings = () => {
  return null;
};

const DynamicWpContent: React.FC<{ templateId: string|number; fallback?: React.ReactNode }> = ({ fallback }) => {
  return <>{fallback}</>;
};

export default DynamicWpContent;
