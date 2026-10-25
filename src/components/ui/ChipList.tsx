interface ChipListProps {
    items: string[];
}

export function ChipList({items}: ChipListProps) {
    return (
        <div className="chips">
            {items.map((item) => (
                <span key={item} className="chip">{item}</span>
            ))}
        </div>
    );
}