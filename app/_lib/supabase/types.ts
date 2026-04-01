export type Database = {
  public: {
    Tables: {
      content_items: {
        Row: {
          id: string;
          section: string;
          position: number | null;
          title: string;
          description: string | null;
          asset_url: string;
          asset_type: "image" | "video";
          file_key: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          section: string;
          position?: number | null;
          title: string;
          description?: string | null;
          asset_url: string;
          asset_type: "image" | "video";
          file_key?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          section?: string;
          position?: number | null;
          title?: string;
          description?: string | null;
          asset_url?: string;
          asset_type?: "image" | "video";
          file_key?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};