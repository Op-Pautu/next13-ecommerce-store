import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`Failed to fetch categories. Status: ${res.status}`);
    }

    return res.json();
  } catch (error: any) {
    console.error("Error fetching categories:", error.message);
    // You might want to throw the error here or return a default value
    throw error;
  }
};

export default getCategories;
