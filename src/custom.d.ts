type Tag = {
  id: number;
  text: string;
  name: string;
}
type DataSource = { text: string; value: string }
type RecordItem = {
  id?: number;
  tags: Tag[];
  type: DataSource;
  note: string;
  amount: number;
  noteDate: Date;
  createAt?: Date;
}
type RootState = {
  recordList: RecordItem[];
}
