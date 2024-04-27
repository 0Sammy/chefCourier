import Link from "next/link";
import { formatDateTime } from "@/lib/dateTimeUtils";


const AllAdmins = ({admins}: any) => {
    return ( 
        <main>
            <div className="special max-h-screen border border-[#7676801F] rounded-xl p-4">
            <div className="flex flex-col gap-y-2 mt-8">
                {admins &&
                  admins.map((admin: any) => (
                    <Link href={`/admin/admin/${admin.id}`}
                      key={admin.id}
                      className="flex justify-between items-center flex-wrap gap-5 border-b border-slate-600 hover:bg-bgWhite duration-300 p-2 md:p-4 xl:p-6 rounded-md"
                    >
                      <div className="flex flex-col gap-y-0.5 w-[23%] min-w-[10rem]">
                        <p className="text-xs xl:text-sm text-[#101828]">
                          {admin.email}
                        </p>
                        <p className="text-[10px] text-xs text-[#667085]">
                          {admin.id}
                        </p>
                      </div>
                      <div className="flex flex-col gap-y-0.5 w-[23%] min-w-[10rem]">
                        <p className="text-[#8E8E93] text-[10px] md:text-xs">
                          Date Joined
                        </p>
                        <p className="text-[#020100] text-xs xl:text-sm font-medium">
                          {formatDateTime(admin.createdAt)}
                        </p>
                      </div>
                      <div className="flex flex-col gap-y-0.5 w-[23%] min-w-[10rem]">
                        <p className="text-[#8E8E93] text-[10px] md:text-xs">
                          Admin Status
                        </p>
                        <p
                          className={`${
                            admin.role === "superAdmin"
                              ? "text-[#248A3D]"
                              : "text-[#0040DD]"
                          } text-xs xl:text-sm font-semibold`}
                        >
                          {admin.role === "superAdmin" ? "Super Admin" : "Admin"}
                        </p>
                      </div>
                      <div className="flex flex-col gap-y-0.5 w-[23%] min-w-[10rem]">
                        <p className="text-[#8E8E93] text-[10px] md:text-xs">
                          Notification Email
                        </p>
                        <p className="text-[#020100] text-xs xl:text-sm font-medium">
                          {admin.notificationEmail}
                        </p>
                      </div>
                    </Link>
                  ))}
            </div>
            </div>
        </main>
     );
}
 
export default AllAdmins;