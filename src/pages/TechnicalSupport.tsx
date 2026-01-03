import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Headphones, 
  MessageCircle, 
  Clock, 
  Shield,
  CheckCircle2,
  Mail,
  Phone,
  FileText
} from "lucide-react";

const TechnicalSupport = () => {
  const supportTiers = [
    {
      title: "Hỗ trợ Cơ bản",
      description: "Hỗ trợ miễn phí qua email và hotline. Nhận trợ giúp từ đội ngũ chuyên viên của chúng tôi.",
      features: [
        "Hỗ trợ qua email",
        "Hotline tư vấn",
        "Tài liệu hướng dẫn",
        "Giải đáp thắc mắc",
      ],
      price: "Miễn phí",
    },
    {
      title: "Hỗ trợ Tiêu chuẩn",
      description: "Hỗ trợ qua email với thời gian phản hồi phù hợp cho hầu hết các dự án.",
      features: [
        "Hỗ trợ email ưu tiên",
        "Phản hồi trong giờ làm việc",
        "Truy cập tài liệu",
        "Báo cáo vấn đề",
      ],
      price: "Theo gói dịch vụ",
    },
    {
      title: "Hỗ trợ Cao cấp",
      description: "Hỗ trợ ưu tiên với thời gian phản hồi nhanh hơn và kênh hỗ trợ chuyên dụng.",
      features: [
        "Hỗ trợ email ưu tiên cao",
        "Thời gian phản hồi nhanh",
        "Hỗ trợ qua điện thoại",
        "Chuyên viên hỗ trợ chuyên dụng",
      ],
      price: "Liên hệ bán hàng",
    },
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: "Hotline",
      description: "Gọi điện trực tiếp để được tư vấn nhanh chóng",
      link: "tel:+84901234567",
      contact: "090 123 4567",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Gửi email cho chúng tôi và nhận phản hồi trong vòng 24 giờ",
      link: "mailto:support@trade4me.com",
      contact: "support@trade4me.com",
    },
    {
      icon: MessageCircle,
      title: "Tư vấn trực tiếp",
      description: "Đến văn phòng của chúng tôi để được tư vấn trực tiếp",
      link: "/contact",
      contact: "123 Đường Thương mại, Q1, TP.HCM",
    },
    {
      icon: FileText,
      title: "Tài liệu",
      description: "Truy cập tài liệu hướng dẫn và câu hỏi thường gặp",
      link: "/documentation",
      contact: "Xem tài liệu",
    },
  ];

  const faqs = [
    {
      question: "Thời gian xử lý thủ tục xuất nhập khẩu mất bao lâu?",
      answer: "Thời gian xử lý phụ thuộc vào loại hàng hóa và thị trường. Thông thường từ 3-7 ngày làm việc cho thủ tục cơ bản.",
    },
    {
      question: "Chi phí dịch vụ được tính như thế nào?",
      answer: "Chi phí được tính dựa trên giá trị hàng hóa, loại hàng, thị trường và dịch vụ yêu cầu. Chúng tôi sẽ báo giá chi tiết sau khi nhận thông tin.",
    },
    {
      question: "Có hỗ trợ bảo hiểm hàng hóa không?",
      answer: "Có, chúng tôi cung cấp dịch vụ bảo hiểm hàng hóa cho mọi lô hàng xuất nhập khẩu để đảm bảo an toàn tối đa.",
    },
    {
      question: "Có hỗ trợ xử lý hàng hóa đặc biệt không?",
      answer: "Có, chúng tôi có kinh nghiệm xử lý nhiều loại hàng hóa đặc biệt như hàng nguy hiểm, hàng dễ vỡ, hàng có yêu cầu bảo quản đặc biệt.",
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
                <li className="text-foreground">Hỗ trợ kỹ thuật</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Hỗ Trợ Kỹ Thuật & Khách Hàng
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nhận sự trợ giúp bạn cần khi bạn cần. Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng hỗ trợ bạn 
                với các câu hỏi kỹ thuật, xử lý sự cố và hướng dẫn sử dụng dịch vụ Trade 4 Me hiệu quả.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="gap-2" asChild>
                  <a href="tel:+84901234567">
                    <Phone size={18} />
                    Gọi ngay: 090 123 4567
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    <Mail size={18} />
                    Gửi yêu cầu hỗ trợ
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Kênh Hỗ Trợ
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Chọn cách liên hệ phù hợp nhất với bạn
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {supportChannels.map((channel, index) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {channel.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {channel.description}
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <a href={channel.link}>
                              {channel.contact}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Gói Hỗ Trợ
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Chọn gói hỗ trợ phù hợp với nhu cầu của bạn
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {supportTiers.map((tier, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {tier.title}
                      </h3>
                      <p className="text-primary font-semibold text-lg mb-4">
                        {tier.price}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {tier.description}
                      </p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">Liên hệ</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Câu Hỏi Thường Gặp
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Tìm câu trả lời cho các câu hỏi phổ biến
              </p>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
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
                Vẫn Cần Hỗ Trợ?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn. Liên hệ với chúng tôi ngay hôm nay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                  <a href="tel:+84901234567">
                    <Phone size={18} />
                    Gọi: 090 123 4567
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                  <Link to="/contact">
                    <Mail size={18} />
                    Gửi Email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalSupport;
