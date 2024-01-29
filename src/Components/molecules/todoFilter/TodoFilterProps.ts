export interface TodoFilterProps {
    handleFilterChange: (filter: 'all' | 'completed' | 'incomplete') => void;
}
