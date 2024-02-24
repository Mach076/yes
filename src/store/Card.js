import { create } from "zustand";

const useCardStore = create((set) => ({
  cards: [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      phone: "5465454113",
      address: "Alia Town",
      cardNumber: "1234",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
    },
  ],
  favouriteCards: [],
  addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
  editCard: (id, card) =>
    set((state) => ({
      cards: state.cards.map((c) => (c.id === id ? card : c)),
    })),
  getCard: (id) => set((state) => state.cards.find((c) => c.id === id)),
  deleteCard: (id) =>
    set((state) => ({ cards: state.cards.filter((c) => c.id !== id) })),
  toggleFavourite: (id) =>
    set((state) => {
      if (state.favouriteCards.includes(id)) {
        return {
          favouriteCards: state.favouriteCards.filter((c) => c !== id),
        };
      }
      return { favouriteCards: [...state.favouriteCards, id] };
    }),
}));

export default useCardStore;
