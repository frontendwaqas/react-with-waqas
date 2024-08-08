/* eslint-disable no-unreachable */
/* eslint-disable no-useless-catch */
import conf from "../Conf/Conf";

import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featurImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featurImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async updtaePost(slug, { title, content, featurImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug,
        { title, content, featurImage, status }
      );
    } catch (error) {
      throw error;
    }
  }
  async deletePost({ slug }) {
    try {
      return await this.databases.deleteDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
      return false;
    }
  }
  //file upload
  async fileUpload(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }
  async deletFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }
  async filePreview(fileId) {
    return this.bucket.getFilePreview(conf.appWriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
