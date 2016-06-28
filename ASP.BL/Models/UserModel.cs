using Common.Resources;
using System.ComponentModel.DataAnnotations;

namespace ASP.BL.Models
{
    public class UserModel
    {

        public int? UserId { get; set; }

        [Required]
        [Display(Name = "First_name", ResourceType = typeof(Titles))]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last_name", ResourceType = typeof(Titles))]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "Email", ResourceType = typeof(Titles))]
        [EmailAddress]
        public string Email { get; set; }
    }
}
