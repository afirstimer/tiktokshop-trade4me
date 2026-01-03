import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  FileCheck, 
  Users, 
  Target,
  CheckCircle2,
  Mail,
  Phone
} from "lucide-react";

const Consulting = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Tư vấn Thủ tục Xuất Nhập Khẩu",
      description: "Nhận tư vấn chuyên sâu về các quy định, thủ tục xuất nhập khẩu. Chúng tôi giúp bạn hiểu rõ quy trình và chuẩn bị đầy đủ hồ sơ cần thiết.",
      features: [
        "Tư vấn quy định pháp luật",
        "Hướng dẫn chuẩn bị hồ sơ",
        "Tư vấn thuế, phí",
        "Tư vấn Incoterms",
      ],
    },
    {
      icon: Users,
      title: "Tư vấn Chiến lược Xuất Nhập Khẩu",
      description: "Tư vấn chiến lược xuất nhập khẩu phù hợp với doanh nghiệp của bạn. Chúng tôi giúp bạn lập kế hoạch và tối ưu hóa quy trình.",
      features: [
        "Phân tích nhu cầu",
        "Lập kế hoạch xuất nhập khẩu",
        "Tối ưu hóa chi phí",
        "Đánh giá rủi ro",
      ],
    },
    {
      icon: Target,
      title: "Tư vấn Thị trường",
      description: "Tư vấn về thị trường xuất nhập khẩu, giúp bạn xác định cơ hội và thách thức khi mở rộng kinh doanh quốc tế.",
      features: [
        "Phân tích thị trường",
        "Đánh giá cơ hội",
        "Tư vấn sản phẩm phù hợp",
        "Chiến lược mở rộng",
      ],
    },
    {
      icon: MessageSquare,
      title: "Tư vấn Pháp lý",
      description: "Tư vấn về các vấn đề pháp lý liên quan đến xuất nhập khẩu, giúp doanh nghiệp tuân thủ đúng quy định.",
      features: [
        "Tư vấn quy định pháp luật",
        "Đánh giá rủi ro pháp lý",
        "Hỗ trợ giải quyết vấn đề",
        "Cập nhật quy định mới",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Tiếp nhận yêu cầu",
      description: "Chúng tôi lắng nghe nhu cầu và thách thức của bạn trong một cuộc tư vấn miễn phí.",
    },
    {
      step: "2",
      title: "Phân tích & Đề xuất",
      description: "Chúng tôi phân tích tình huống và tạo đề xuất tùy chỉnh với timeline và kết quả mong đợi.",
    },
    {
      step: "3",
      title: "Thực hiện tư vấn",
      description: "Các chuyên gia tư vấn của chúng tôi làm việc chặt chẽ với bạn để đạt được kết quả.",
    },
    {
      step: "4",
      title: "Theo dõi & Hỗ trợ",
      description: "Chúng tôi đảm bảo bạn có mọi thứ cần thiết để thành công độc lập.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Trang chủ
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/services" className="hover:text-primary transition-colors">
                    Dịch vụ
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">Tư vấn</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Dịch Vụ Tư Vấn Chuyên Nghiệp
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Các chuyên gia tư vấn của chúng tôi cung cấp hướng dẫn và hỗ trợ có giá trị trong các khía cạnh khác nhau 
                của dự án xuất nhập khẩu của bạn. Chúng tôi tiến hành các buổi tư vấn để giúp bạn thiết kế 
                giải pháp xuất nhập khẩu hiệu quả và có thể mở rộng.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="gap-2" asChild>
                  <Link to="/contact">
                    <Mail size={18} />
                    Liên hệ ngay
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+84901234567">
                    <Phone size={18} />
                    Hotline: 090 123 4567
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Dịch Vụ Tư Vấn Của Chúng Tôi
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Tư vấn toàn diện để giúp bạn thành công với xuất nhập khẩu
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Quy Trình Tư Vấn
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Các bước đơn giản để bắt đầu với dịch vụ tư vấn của chúng tôi
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sẵn Sàng Nhận Tư Vấn Chuyên Nghiệp?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Liên hệ với đội ngũ tư vấn của chúng tôi để thảo luận về cách chúng tôi có thể giúp bạn thành công với xuất nhập khẩu.
              </p>
              <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <Mail size={18} />
                  Liên hệ Tư vấn
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consulting;
