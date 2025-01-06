'use client'

import ButtonControlEach from './buttonControlEach'
import { Task } from '@/app/lib/definitions'
import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

export default function TasksDisplay({
  prior,
  status,
  tasks,
  toggleInfor,
  color
}: {
  prior: string
  status: string
  tasks: Task[]
  toggleInfor: boolean
  color: string
}) {


  return (
    <div className={`${toggleInfor ? 'block' : 'hidden'} mb-2 px-2`}>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks &&
          tasks.map((task: Task, index: number) => (
            <ButtonControlEach
              color={color}
              id={task.id}
              key={task.title}
              index={index}
              task={task}
              prior={prior}
              status={status}
            />
          ))}
      </SortableContext>
    </div>
  )
}
