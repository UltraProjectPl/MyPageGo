import { useDispatch as useDispatchBase } from 'react-redux';
import { ThunkDispatch } from '../store';

type UseDispatch = () => ThunkDispatch;
export const useDispatch: UseDispatch = useDispatchBase;