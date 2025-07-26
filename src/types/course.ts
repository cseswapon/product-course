export interface CourseMedia {
  name: string;
  resource_type: string;
  resource_value?: string;
  thumbnail_url?: string;
}

export interface CheckList {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

interface Value {
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  end_at?: string;
  id?: string;
  start_at?: string;
  template?: string;
  text?: string;
  name?: string;
  description?: string;
  has_instructor_page?: boolean;
  image?: string;
  short_description?: string;
  slug?: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Partial<Value>[];
}

export interface Course {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: CourseMedia[];
  checklist?: CheckList[];
  seo?: [];
  cta_text: {
    name: string;
    value: string;
  };
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group?: [];
  delivery_method: string;
}

export interface ApiResponse {
  code: number;
  data: Partial<Course>;
  error?: [];
  message: string;
  payload: [];
  status_code: number;
}
