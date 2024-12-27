"use client";

import { Swapy } from "swapy";
import { createSwapy } from "swapy";
import { useEffect, useRef, useState } from "react";
import { InitialState, TasksState } from "@/app/lib/features/tasks/tasksSlice";

export default function ImportantUrgent({ tasks }: TasksState) {

    const [taskList, setTasks] = useState<InitialState>(tasks);

  const swapyRef = useRef<Swapy | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      // Tạo Swapy trên containerRef
      swapyRef.current = createSwapy(containerRef.current!, {
        manualSwap: true,
        animation: 'dynamic'
        autoScrollOnDrag: true,
        swapMode: 'drop',
        enabled: true,
        dragAxis: 'x',
        dragOnHold: true
      });

      // Các sự kiện Swapy
      swapyRef.current.onSwap((event) => {
      setSlotItemMap(event.newSlotItemMap.asArray)
    })

    // Cleanup khi component bị hủy
    return () => {
      swapyRef.current?.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="space-y-4">
      <div className="task-list">
        {/* Render danh sách task */}
        {tasks?.important?.urgent.map((task: string, index: number) => (
          <div
            key={index}
            data-swapy-slot={`${index}`} // Đảm bảo có data-swapy-slot duy nhất
            className="task-container"
          >
            <p
              data-swapy-item={`${index}`} // Đảm bảo có data-swapy-item duy nhất
              className="task-item mt-2 bg-[#d6efee] cursor-pointer rounded-lg text-sm text-black capitalize flex px-3 py-2 mx-2 justify-center text-base shadow-sm border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md break-all"
            >
              {index + 1}. {task}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
