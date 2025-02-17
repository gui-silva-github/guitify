import { MongoClient } from "mongodb"

const URI = "mongodb+srv://guilhermesilva:guilhermesilva123@cluster0.jrglj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("guitify")