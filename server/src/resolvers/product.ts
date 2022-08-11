import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { Resolver } from "./types";

const productResolver: Resolver = {
  Query: {
    products: async (parent) => {
      const products = collection(db, "products");
      const q = query(products);
      const snapshot = await getDocs(q);
      const data: DocumentData[] = [];
      snapshot.forEach((doc) =>
        data.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      return data;
    },
    product: async (parent, { id }) => {
      const snapshot = await getDoc(doc(db, "products", id));
      return {
        ...snapshot.data(),
        id: snapshot.id,
      };
    },
  },
};

export default productResolver;
