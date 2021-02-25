type Tag = {
  id?: number;
  type: DataSource;
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
  tagList: Tag[];
  duplicate: string;
}
