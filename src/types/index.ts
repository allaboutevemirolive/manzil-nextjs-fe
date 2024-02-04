export interface IMeta {
  title: string;
  description: string;
  type: string;
  image: string;
}

export interface IHeroTitleProps {
  title: string;
  subtitle: string;
}

export interface IRecitationItem {
  id: number;
  reciter_name: string;
  style: string;
  translated_name: {
    language_name: string;
    name: string;
  };
}

export interface IAyahAudioItem {
  id: number;
  audio_url: string;
  surahName: string;
  verseNumber: string;
}

export interface IAyahState {
  ayahAudioList: IAyahAudioItem[];
  isLoading: boolean;
}

export interface IAudio {
  audio_url: "https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3";
  chapter_id: 1;
  file_size: 839808;
  format: "mp3";
  id: 911;
}

export interface IChapterAudioResponse {
  audio_file: IAudio;
}

export interface IVerseAudio {
  verse_key: string;
  url: string;
}

export interface IVerseAudioResponse {
  audio_files: IVerseAudio[];
}

export interface IAudioItem {
  id: number;
  surahName: string;
  audio_url: string;
  verseNumber: string;
}

export enum AlBaqarahVerseKey {
  AYAH_1 = "2:1",
  AYAH_2 = "2:2",
  AYAH_3 = "2:3",
  AYAH_4 = "2:4",
  AYAH_5 = "2:5",
  AYAH_163 = "2:163",
  AYAH_255 = "2:255",
  AYAH_256 = "2:256",
  AYAH_257 = "2:257",
  AYAH_284 = "2:284",
  AYAH_285 = "2:285",
  AYAH_286 = "2:286",
}

export const BASE_URL = process.env.NEXT_PUBLIC_QURAN_BASE_URL || "";
export const AUDIO_URL = process.env.NEXT_PUBLIC_QURAN_AUDIO_URL || "";
