import { Storage } from 'aws-amplify';

export const uploadFileToS3 = async (
    path: string,
    file: File,
    objectId: string | null
): Promise<string> => {
    const prefix = objectId ? `${objectId.slice(0, 8)}_` : '';
    return Storage.put(path + prefix + file.name, file, {
        progressCallback(progress) {
            // console.log('Uploaded : ', progress);
        },
        contentType: file.type
    })
        .then((result: any) => {
            console.log('Success =>', result);
            return result.key;
        })
        .catch((error) => {
            console.log('error =>', error);
            return null;
        });
};

export const getSignedFile = async (path): Promise<string | null> => {
    return Storage.get(path, { level: 'public' })
        .then((result) => {
            return result as string;
        })
        .catch((error) => {
            console.log('error fetching file from s3 =>', error);
            return null;
        });
};

export const deleteFromS3 = async (path) => {
    await Storage.remove(path, { level: 'public' })
        .then((result) => console.log('Successfully deleted =>', result))
        .catch((error) => console.log('Deleting from S3 error:', error));
};
