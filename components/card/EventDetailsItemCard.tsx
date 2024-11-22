
const EventDetailsItemCard = ({title = "N/A", value = "N/A", Icon, isLast}:{title?: string, value?: string, Icon?: any, isLast?: boolean}) => {
  return (
      <div className={`py-6 ${!isLast && "border-b-1 border-b-gray_primary/20"} `}>
          <div className="flex flex-row gap-6">
              <div className="h-auto w-auto">
                  <Icon size={35} className="text-primary"/>
              </div>
              <div className="flex flex-col">
                  <p className="font-semibold">{title}</p>
                  <p className='font-medium text-[14px] text-black/50'>{value}</p>
              </div>
          </div>
      </div>
  );
}

export default EventDetailsItemCard;