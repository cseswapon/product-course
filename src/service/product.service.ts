export class ApiService {
  constructor() {}

  public async fetchData(endpoint: string) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Fetch error", error);
      throw error;
    }
  }
}
