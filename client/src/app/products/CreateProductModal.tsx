/** @format */
import Header from "@/app/(components)/Header";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};
const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });
  if (!isOpen) {
    return null;
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const labelCssStyle = "block text-sm font-medium text-gray-700";
  const inputCssStyle =
    "block w-full mb-2 p-2 border border-gray-500 rounded-md";
  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-auto h-full w-full z-20'>
      <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
        <Header name='Create New Product' />
        <form
          className='mt-5'
          onSubmit={handleOnSubmit}>
          {/* product name */}
          <label
            htmlFor='productName'
            className={labelCssStyle}>
            Product Name
          </label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            required
            onChange={handleOnChange}
            value={formData.name}
            className={inputCssStyle}
          />
          {/* price */}
          <label
            htmlFor='productPrice'
            className={labelCssStyle}>
            Price
          </label>
          <input
            type='number'
            name='price'
            placeholder='Price'
            required
            onChange={handleOnChange}
            value={formData.price}
            className={inputCssStyle}
          />
          {/* stock quantity */}
          <label
            htmlFor='stockQuantity'
            className={labelCssStyle}>
            Stock Quantity
          </label>
          <input
            type='number'
            name='stockQuantity'
            placeholder='Stock Quantity'
            required
            onChange={handleOnChange}
            value={formData.stockQuantity}
            className={inputCssStyle}
          />
          {/* rating */}
          <label
            htmlFor='productRating'
            className={labelCssStyle}>
            Rating
          </label>
          <input
            type='number'
            name='rating'
            placeholder='Rating'
            required
            onChange={handleOnChange}
            value={formData.rating}
            className={inputCssStyle}
          />
          <div className='mt-4 gap-2 flex w-full justify-end'>
            {/* submit button */}
            <button
              className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
              type='submit'>
              Create
            </button>
            {/* cancel button */}
            <button
              className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700'
              type='button'
              onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
