export type RequestStatus = 'New' | 'Contacted' | 'In Progress' | 'Completed' | 'Rejected';

export interface ProjectRequest {
  id: string;
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  status: RequestStatus;
  created_at: string;
  updated_at?: string;
  notes?: string;
}

export interface ProjectRequestStats {
  total: number;
  new: number;
  contacted: number;
  inProgress: number;
  completed: number;
  rejected: number;
}

export interface FilterOptions {
  status?: RequestStatus | 'All';
  projectType?: string | 'All';
  searchQuery?: string;
}
