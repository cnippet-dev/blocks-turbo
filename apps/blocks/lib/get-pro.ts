import { useProStatusContext } from "@/providers/pro-status-provider";

export function useProStatus() {
    return useProStatusContext();
}
