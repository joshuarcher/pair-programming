export type Timestamp = {
    _nanoseconds: number;
    _seconds: number;
};

export type Trailer = {
    fileName: string;
    downloadLink: string;
    fileType: string;
};

export type Category = {
    trailer: Trailer;
    featured: boolean;
    deleted: boolean;
    hidden: boolean;
    name: string;
    description: string;
    id: string;
    partnerId: string;
    previewImage: string | null;
    serverReservationObjectId: string;
    platformID: string;
    _ordinal: number;
    index: number;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    descriptionHTML: string;
};

export type Item = {
    vod_categories: string[];
    id: string;
    type: string;
};

export type Video = {
    id: string;
    created: number;
    images: string[];
    duration: number;
    name: string;
    description: string;
    vod_categories: string[];
    total_booked: number;
    equipment_required: string[];
    workout_types: string[];
    body_focus: string;
    filters: string[];
    host_ids: string[];
    intensity: string;
    bookmarked: boolean;
    previouslyWatched: boolean;
    type: string;
  };
  
export interface APIResponse {
    categories: Category[];
    videos: string[];
    items: Video[];
  }