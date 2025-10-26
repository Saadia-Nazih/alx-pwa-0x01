export interface MovieProps {
  id: string;
  titleText: { 
    text: string; 
  };
  primaryImage: { 
    url: string; 
  } | null;
  releaseYear: { 
    year: number; 
  };
}