const conf = {
   appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
   appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT-ID),
   appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION-ID),
   appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE-ID),
   appwriteBuckedtId: String(import.meta.env.VITE_APPWRITE_BUCKET-ID)
}
export default conf