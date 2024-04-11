"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDateTime } from "@/lib/dateTimeUtils";

//Import Needed Icons
import { PiPackageFill } from "react-icons/pi";
//Import Needed Components
import OrderCreation from "./OrderCreation";


const OrderSummary = (orders: any) => {
  const router = useRouter();
  //Set States
  const [create, setCreate] = useState<boolean>(false);
  // Function
  const toggleCreate = () => {
    setCreate((prevCreate) => !prevCreate);
  };
  return (
    <>
      {create && <OrderCreation onClose={toggleCreate} />}
      <main className="special mt-10 overflow-x-auto">
        <div className="flex w-full min-w-[40rem] gap-x-10 md:justify-between">
          <p className="text-lg font-bold lg:text-xl">Ongoing Shipments</p>
          <button onClick={toggleCreate} className="rounded-md bg-orange p-3 font-semibold text-white duration-500 hover:bg-orange1 text-xs md:text-sm xl:text-base">
            Create New Order
          </button>
        </div>
        {!orders && (
          <div className="mt-10 w-full min-w-[40rem]">
            <p className="text-center text-xl font-bold">
              No Shipment Order Yet
            </p>
          </div>
        )}
        {orders.length !== 0 && (
          <div className="mt-10 w-full min-w-[40rem]">
            {orders?.orders &&
              orders.orders.map((order: any) => (
                <div
                  key={order.id}
                  onClick={() => router.push(`/admin/orders/${order.id}`)}
                  className="mt-4 flex cursor-pointer items-center justify-between border-b border-gray-400 py-2"
                >
                  <PiPackageFill className="text-orange" size={30} />
                  <p className="w-1/4 text-center text-sm font-bold md:text-base lg:text-lg">
                    {order.trackingNumber}
                  </p>
                  <p className="w-1/4 text-center text-sm font-bold md:text-base lg:text-lg">
                    {order.originPort}
                  </p>
                  <p className="w-1/4 text-center text-sm font-bold md:text-base lg:text-lg">
                    {new Date(order.deliveryRequiredDate).toLocaleDateString()}
                  </p>
                  <p className="w-1/4 text-center text-sm font-semibold text-green-600 lg:text-base">
                    {formatDateTime(order.dateCreated)}
                  </p>
                </div>
              ))}
          </div>
        )}
      </main>
    </>
  );
};

export default OrderSummary;
