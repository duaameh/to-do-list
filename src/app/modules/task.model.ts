export interface Task {
    id: number;
    title: string;
    status: 'To Do' | 'Doing' | 'Done';
    image?: string;
  }
  