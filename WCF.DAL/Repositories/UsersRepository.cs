using System.Collections.Generic;
using WCF.DAL.Entites;
using WCF.DAL.Interfaces;

namespace WCF.DAL.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        public UsersRepository()
        {
            Users = new List<User>() {
                new User() {
                    Id = 1,
                    FirstName = "User1",
                    LastName = "User1",
                    Email = "user1@test.com"
                },
                new User() {
                    Id = 1,
                    FirstName = "User2",
                    LastName = "User2",
                    Email = "user2@test.com"
                },
                new User() {
                    Id = 1,
                    FirstName = "User3",
                    LastName = "User3",
                    Email = "user3@test.com"
                }
            };
        }

        public List<User> Users { get; }
    }
}
