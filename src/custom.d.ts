

type Tag = {
  id?: number;
  type: DataSource;
  text: string;
  name: string;
};
type DataSource = { text: string; value: string }
type RecordItem = {
  id?: number;
  tag: Tag;
  type: DataSource;
  note: string;
  amount: number;
  noteDate: Date;
  createAt?: Date;
}
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  iconList: Tag[];
  duplicate: string;
}
type Result = {
  title: Date;
  items: RecordItem[];
  outcome?: number;
  income?: number;
  total?: number;
}

