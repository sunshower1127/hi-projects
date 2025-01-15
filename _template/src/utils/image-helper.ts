export function getImageUrl(image: Blob) {
  return URL.createObjectURL(image);
}

export function destroyImageUrl(imageUrl: string) {
  URL.revokeObjectURL(imageUrl);
}
