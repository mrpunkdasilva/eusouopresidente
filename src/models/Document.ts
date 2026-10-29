import mongoose, { Schema, Document } from 'mongoose';

export interface IDocument extends Document {
  templateId: string;
  title: string;
  logoUrl: string;
  headerText: string;
  subHeaderText: string;
  content: string;
  signature: string;
  locationDate: string;
  createdAt: Date;
}

const DocumentSchema: Schema = new Schema({
  templateId: { type: String, required: true, default: 'brasil' },
  title: { type: String, required: true },
  logoUrl: { type: String },
  headerText: { type: String, required: true },
  subHeaderText: { type: String },
  content: { type: String, required: true },
  signature: { type: String },
  locationDate: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Document || mongoose.model<IDocument>('Document', DocumentSchema);
