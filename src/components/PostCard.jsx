import Image from "next/image";
export default function PostCard({ url, title }) {
  <div className="">
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <Image src={url} alt={title} />
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>;
}