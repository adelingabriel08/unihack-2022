

namespace Unihack.Core.Exceptions
{
    public class ValidationException : ApplicationException
    {
        public List<string> ValidationErrors { get; set; } = new List<string>();

        public ValidationException(string validationError)
        {
            ValidationErrors.Add(validationError);
        }

        public ValidationException(List<string> validationErrors)
        {
            ValidationErrors = validationErrors;
        }

    }
}
