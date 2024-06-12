'use client'
import React, { useEffect, useState, useCallback } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { getData } from "../../server/action";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ModeToggle } from "../Components/darkmode";
import Graph from "../Components/graph";
import { Input } from "@/components/ui/input";
import Predict from '../Components/predict'
export default function page() {
  return (
    <div>
      <Predict/>
    </div>
  )
}


// export default function DatePickerWithRange({ className }) {
//   const [date, setDate] = useState({
//     from: new Date(2022, 0, 20),
//     to: addDays(new Date(2022, 0, 20), 20),
//   });
//   const [rep, setRep] = useState(null);
//   const [shopCode, setShopCode] = useState("");

//   const run = useCallback(async () => {
//     try {
//       const res = await getData({
//         from: format(date?.from, "yyyy-MM-dd"),
//         to: format(date?.to, "yyyy-MM-dd"),
//         shopCode: shopCode // Include the shop code
//       });
//       setRep(res !== -1 ? res : -1);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setRep(-1);
//     }
//   }, [date, shopCode]);

//   useEffect(() => {
//     if (date?.from && date?.to) {
//       run();
//     }
//   }, [date, run, shopCode]);

//   const handleShopCodeChange = (event) => {
//     setShopCode(event.target.value);
//   };

//   return (
//     <>
//       {/* <ModeToggle /> */}
//       <div className="date-con">
//         <div className={cn("grid gap-2", className)}>
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button
//                 id="date"
//                 variant={"outline"}
//                 className={cn(
//                   "w-[300px] justify-start text-left font-normal",
//                   !date && "text-muted-foreground"
//                 )}
//               >
//                 <CalendarIcon className="mr-2 h-4 w-4" />
//                 {date?.from ? (
//                   date.to ? (
//                     <>
//                       {format(date.from, "LLL dd, y")} -{" "}
//                       {format(date.to, "LLL dd, y")}
//                     </>
//                   ) : (
//                     format(date.from, "LLL dd, y")
//                   )
//                 ) : (
//                   <span>Pick a date</span>
//                 )}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0" align="start">
//               <Calendar
//                 initialFocus
//                 mode="range"
//                 defaultMonth={date?.from}
//                 selected={date}
//                 onSelect={setDate}
//                 numberOfMonths={2}
//               />
//             </PopoverContent>
//           </Popover>

//           {/* Input field for shop code */}
//           <Input
//             type="text"
//             placeholder="Enter Shop Code"
//             className="shopeval"
//             value={shopCode} // Bind value to shopCode state
//             onChange={handleShopCodeChange} // Handle changes
//           />
//         </div>
//       </div>
//       {rep !== -1 && rep !== null ? (
//         <>
//           <div className="con-con">
//             <div className="gph-con">
//               <Graph res={rep} />
//             </div>
//           </div>
//         </>
//       ) : null}
//     </>
//   );
// }
