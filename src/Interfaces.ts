export interface DataResult {
  page: number;
  next_page: string;
  per_page: number;
  photos: Data[];
  total_results: number;
}

export interface Data {
  alt: string;
  avg_color: string;
  height: number;
  id: number;
  liked: false;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: SubSrc;
  url: string;
  width: number;
}

interface SubSrc {
  landscape: string;
  large: string;
  large2x: string;
  medium: string;
  original: string;
  portrait: string;
  small: string;
  tiny: string;
}

// 測試用
// const test: Data = {
//   alt: "Black Flat Screen Computer Monitor",
//   avg_color: "#214248",
//   height: 3648,
//   id: 1714208,
//   liked: false,
//   photographer: "Josh Sorenson",
//   photographer_id: 11929,
//   photographer_url: "https://www.pexels.com/@joshsorenson",
//   src: {
//     landscape:
//       "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//     large:
//       "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//     large2x:
//       "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     medium:
//       "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&h=350",
//     original:
//       "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
//     portrait:
//       "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//     small:
//       "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&h=130",
//     tiny: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
//   },
//   url: "https://www.pexels.com/photo/black-flat-screen-computer-monitor-1714208/",
//   width: 5472,
// };
