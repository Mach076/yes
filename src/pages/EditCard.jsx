import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import useCardStore from "../store/Card";
const EditCard = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [description, setDescription] = useState("");
  const cards = useCardStore((state) => state.cards);
  const editCard = useCardStore((state) => state.editCard);
  const { id } = useParams();
  useEffect(() => {
    const card = cards.find((c) => c.id === parseInt(id));
    setTitle(card.title);
    setAddress(card.address);
    setPhone(card.phone);
    setCardNumber(card.cardNumber);
    setDescription(card.description);
  }, [id]);
  const updateCard = (e) => {
    e.preventDefault();
    // validate
    if (!title || !address || !phone || !cardNumber || !description) {
      return;
    }
    const card = {
      id: parseInt(id),
      title,
      address,
      phone,
      cardNumber,
      description,
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
    };
    editCard(parseInt(id), card);
    navigate("/");
  };
  console.log("cards", cards);
  return (
    <div className="max-w-7xl h-[90vh] mx-auto py-24">
      <div className="py-8">
        <h1 className="text-3xl font-medium">Create Card</h1>
      </div>
      <form onSubmit={updateCard} className="grid w-full grid-cols-2 gap-8">
        <div className="">
          <label className="block text-md" htmlFor="name">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 mt-2 rounded-md"
            placeholder="Name"
            name="name"
            id="name"
          />
        </div>

        <div className="">
          <label className="block text-md" tmlFor="name">
            Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 mt-2 rounded-md"
            placeholder="Alia Town"
            name="name"
            id="name"
          />
        </div>
        <div className="">
          <label className="block text-md" tmlFor="name">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 mt-2 rounded-md"
            placeholder="+92...."
            name="name"
            id="name"
          />
        </div>

        <div className="">
          <label className="block text-md" tmlFor="name">
            Card Number
          </label>
          <input
            type="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full px-3 py-2 mt-2 rounded-md"
            placeholder="1234"
            name="name"
            id="name"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-md" tmlFor="name">
            Description
          </label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-3 mt-2 min-h-[250px] w-full py-2 rounded-md"
            placeholder="This is cool"
            name="name"
            id="name"
          ></textarea>
        </div>

        <button
          type="submit"
          className="h-10 text-white bg-indigo-700 rounded-md w-36"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditCard;
