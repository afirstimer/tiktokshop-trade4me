import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award,
  CheckCircle2,
  Calendar,
  Video,
  Mail,
  Phone
} from "lucide-react";

const Training = () => {
  const trainingTypes = [
    {
      icon: Users,
      title: "Đào tạo tại chỗ",
      description: "Đưa chuyên gia đào tạo đến địa điểm của bạn để có các buổi đào tạo thực hành, cá nhân hóa phù hợp với nhu cầu của đội ngũ.",
      features: [
        "Chương trình tùy chỉnh",
        "Bài tập thực hành",
        "Tập trung vào đội ngũ cụ thể",
        "Phiên hỏi đáp trực tiếp",
      ],
    },
    {
      icon: Video,
      title: "Đào tạo từ xa",
      description: "Tham gia các buổi đào tạo trực tuyến từ bất kỳ đâu trên thế giới. Các phiên tương tác với trình diễn trực tiếp và Q&A.",
      features: [
        "Phiên tương tác trực tiếp",
        "Có sẵn bản ghi",
        "Truy cập toàn cầu",
        "Lịch học linh hoạt",
      ],
    },
    {
      icon: BookOpen,
      title: "Khóa học trực tuyến",
      description: "Các khóa học tự học trực tuyến bao gồm từ kiến thức cơ bản đến nâng cao về xuất nhập khẩu. Học theo tốc độ của riêng bạn.",
      features: [
        "Học tự điều chỉnh",
        "Tài liệu toàn diện",
        "Bài tập thực hành",
        "Chứng chỉ hoàn thành",
      ],
    },
    {
      icon: Award,
      title: "Chương trình Chứng nhận",
      description: "Trở thành chuyên viên xuất nhập khẩu được chứng nhận. Xác nhận chuyên môn của bạn với chứng chỉ được công nhận trong ngành.",
      features: [
        "Chứng chỉ chính thức",
        "Chuẩn bị thi",
        "Công nhận trong ngành",
        "Thăng tiến nghề nghiệp",
      ],
    },
  ];

  const courses = [
    {
      title: "Kiến thức Cơ bản về Xuất Nhập Khẩu",
      duration: "2 ngày",
      level: "Cơ bản",
      description: "Tìm hiểu những điều cơ bản về xuất nhập khẩu, quy định và khái niệm cốt lõi.",
    },
    {
      title: "Thủ tục Hải quan Nâng cao",
      duration: "3 ngày",
      level: "Nâng cao",
      description: "Đi sâu vào các kỹ thuật thủ tục hải quan nâng cao, tối ưu hóa và các phương pháp hay nhất.",
    },
    {
      title: "Incoterms & Hợp đồng Quốc tế",
      duration: "2 ngày",
      level: "Trung cấp",
      description: "Làm chủ Incoterms và các mẫu hợp đồng quốc tế phổ biến.",
    },
    {
      title: "Quản lý Logistics & Chuỗi cung ứng",
      duration: "3 ngày",
      level: "Nâng cao",
      description: "Tìm hiểu cách quản lý và tối ưu hóa chuỗi cung ứng logistics của bạn.",
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
                <li className="text-foreground">Đào tạo</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Chương Trình Đào Tạo Chuyên Nghiệp
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Dù bạn thích đào tạo từ xa hay tại chỗ, các chuyên gia đào tạo giàu kinh nghiệm của chúng tôi 
                cung cấp các chương trình toàn diện phù hợp với nhu cầu của đội ngũ bạn. 
                Chúng tôi bao gồm nhiều chủ đề, bao gồm quy định xuất nhập khẩu, thủ tục hải quan, 
                quản lý logistics và các phương pháp hay nhất.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="gap-2" asChild>
                  <Link to="/contact">
                    <Mail size={18} />
                    Yêu cầu đào tạo
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

        {/* Training Types */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Hình Thức Đào Tạo
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Chọn hình thức đào tạo phù hợp nhất với đội ngũ của bạn
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {trainingTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {type.description}
                      </p>
                      <ul className="space-y-2">
                        {type.features.map((feature, featureIndex) => (
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

        {/* Courses Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Các Khóa Học Có Sẵn
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Chương trình đào tạo toàn diện cho mọi cấp độ kỹ năng
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-foreground">{course.title}</h3>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <Button variant="outline" size="sm">
                      Tìm hiểu thêm
                    </Button>
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
                Sẵn Sàng Nâng Cao Kỹ Năng Đội Ngũ?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Liên hệ với chúng tôi để thảo luận về nhu cầu đào tạo của bạn và tìm chương trình hoàn hảo cho đội ngũ.
              </p>
              <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <Mail size={18} />
                  Yêu cầu Thông tin Đào tạo
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

export default Training;
