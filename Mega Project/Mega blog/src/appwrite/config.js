import conf from "../configVar/conf";
import { Client, ID, Database, Storage, Query } from 'appwrite';
export class Service {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.database = new Database(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            throw error
        }
    }

    async updatepost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            )
        } catch (error) {
            console.log("appwrite service :: update post :: error", error)
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )

            return true
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getpost(slug){
      try {
        return await this.database.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId
        )
      } catch (error) {
        console.log("error", error)
      }
    }
}

const service = new Service()
export default service