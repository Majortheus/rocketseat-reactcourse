import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateDistance(date: string) {
  return formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  });
}
