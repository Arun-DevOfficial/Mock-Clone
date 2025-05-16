// Type definitions for mock data
export type MockFormData = {
  contentType: string;
  charset: string;
  httpBody: string;
  createdAt: string;
  httpHeader?: string;
  _v: number;
  _id?: string;
  name?: string;
  description?: string;
  date?: string;
};

// Mock table props
export interface MockTableProps {
  data: MockFormData[]; // <-- Fix: should be an array
}

// // Mock Table map
// export type MockTableMap = {
//   data: MockFormData[];
// };
