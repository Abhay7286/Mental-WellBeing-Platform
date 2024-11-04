import { create } from "zustand";

const GetId = create((set) => ({
  loggedInUserId: null,
  setLoggedInUserId: (id) => set({ loggedInUserId: id }), 
}));

export default GetId;
