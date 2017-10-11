using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CamsVision.Startup))]
namespace CamsVision
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
