type merchType = {
  id: number;
  name: string;
  desc: string;
  image: string;
  price: number;
  varient: merchVarientType[];
};

type merchVarientType = {
  stock: number;
  color: string;
  size: sizeType;
  price: number | null;
  suk: string;
};

type sizeType = 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | string;
