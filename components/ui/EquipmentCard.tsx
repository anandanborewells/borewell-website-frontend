interface EquipmentCardProps {
    title: string;
    description: string;
}

export function EquipmentCard({ title, description }: EquipmentCardProps) {
    return (
        <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed max-w-none">
                {description}
            </p>
        </div>
    );
}
