import { S3Client, GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const S3Client = new S3Client({
    region: 'us-east-1',
    credentials: {
        
    }
})