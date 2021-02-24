type Tag = {
  id: number;
  text: string;
  name: string;
}
type DataSource = { text: string; value: string }
type RecordItem = {
  tags: Tag[];
  type: DataSource;
  note: string;
  amount: number;
  chartAt: Date;
}
