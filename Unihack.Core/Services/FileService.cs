

using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Unihack.Core.Contracts;
using Unihack.Core.Options;

namespace Unihack.Core.Services
{
    public class FileService : IFileService
    {
        public readonly AzureStorageOptions _azureStorageOptions;

        public FileService(IOptions<AzureStorageOptions> azureStorageOptions)
        {
            _azureStorageOptions = azureStorageOptions.Value;
        }

        public async Task<string> Upload(IFormFile file)
        {
            string containerName = _azureStorageOptions.ContainerName;
            string azureStorageConnectionString = _azureStorageOptions.ConnectionString;
            var containerClient = new BlobContainerClient(azureStorageConnectionString, containerName);

            var stream = new MemoryStream();
            await file.CopyToAsync(stream);
            stream.Position = 0;
            var fileName = file.FileName + Guid.NewGuid().ToString().Substring(0, 6);
            var extension = Path.GetExtension(file.FileName)?.Substring(1).ToLower();
            BlobClient blobClient = containerClient.GetBlobClient(fileName + "." + extension);
            await blobClient.UploadAsync(stream);

            stream.Close();

            var url = $"{_azureStorageOptions.StorageInstanceUrl}/{containerName}/{fileName}.{extension}";

            return url;
        }

    }
}
